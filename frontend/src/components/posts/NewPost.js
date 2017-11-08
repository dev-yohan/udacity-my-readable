import React, {Component} from 'react'
import FlashMessage       from '../shared/FlashMessage'
import AlertMessage       from '../shared/AlertMessage'
import InputText          from '../forms/InputText'
import InputTextArea      from '../forms/InputTextArea'
import Select             from '../forms/Select'
import * as Guid          from '../../util/guid'

class NewPost extends Component {
  constructor(props) {
    super(props);
      this.state = {
        postTitle: '',
        category: '',
        author: '',
        body: '',
        flashMessage: false,
        formValid: true
      }
    this.handleTitleChange    = this.handleTitleChange.bind(this)
    this.handleAuthorChange   = this.handleAuthorChange.bind(this)
    this.handleBodyChange     = this.handleBodyChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleSubmit         = this.handleSubmit.bind(this)
    this.cleanForm            = this.cleanForm.bind(this)
  }

  cleanForm(){
    this.setState({
      postTitle: '',
      author: '',
      body: '',
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if(this.state.category !== '') {
      this.props.createPost({
        id:        Guid.getGuid(),
        title:     this.state.postTitle,
        category:  this.state.category,
        author:    this.state.author,
        body:      this.state.body,
        timestamp: Date.now()
      })
      this.setState({flashMessage: true})
      this.setState({formValid: true})
      this.cleanForm()
    } else {
      this.setState({formValid: false})
    }
  }

  handleTitleChange(event) {
    this.setState({postTitle: event.target.value})
  }

  handleAuthorChange(event) {
    this.setState({author: event.target.value})
  }

  handleBodyChange(event) {
    this.setState({body: event.target.value})
  }

  handleCategoryChange(event) {
    this.setState({category: event.target.value})
  }

  render() {
    const { categories } = this.props  

    return(
      <div>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <h1>New Post</h1>
          </div>  
        </div>
        {this.state.flashMessage &&
          <FlashMessage 
            messageIntro='Well done!'
            messageInfo=' You successfully save a new post'
            callbackInfo=' Back to Home'
            callbackLink='/'
          />
        }
        {!this.state.formValid &&
          <AlertMessage 
            messageInfo='All fields are required'
          />   
        }
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <fieldset>
                <InputText 
                  value={this.state.postTitle}
                  placeholder="Title"
                  label="Title"
                  changeHandler={this.handleTitleChange}
                />
                <Select 
                  value={this.state.category}
                  label="Category"
                  options={categories}
                  changeHandler={this.handleCategoryChange}
                />
                <InputText 
                  value={this.state.author}
                  placeholder="Author"
                  label="Author"
                  changeHandler={this.handleAuthorChange}
                />
                <InputTextArea 
                  value={this.state.body}
                  label="Body"
                  rows="6"
                  changeHandler={this.handleBodyChange}
                /> 
                <div className="form-group pull-right">
                  <button type="reset" className="btn btn-default">Cancel</button>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>  
              </fieldset>
            </form>    
          </div>  
        </div>
      </div>    
    )
  }
}

export default NewPost