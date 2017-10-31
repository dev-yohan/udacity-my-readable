import React, {Component} from 'react'
import * as Guid from '../../util/guid'

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
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className="alert alert-dismissible alert-success">
                <button type="button" className="close" data-dismiss="alert">
                  &times;
                </button>
                <strong>Well done!</strong> You successfully save a new post 
                  <a href="/" className="alert-link"> Back to Home</a>.
              </div> 
            </div>
          </div>    
        }
        {!this.state.formValid &&
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className="alert alert-dismissible alert-danger">
                <button type="button" className="close" data-dismiss="alert">
                  &times;
                </button>
                All fields are required   
              </div> 
            </div>
          </div>    
        }
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <fieldset>
                <div className="form-group">
                  <label className="col-lg-2 control-label">Title</label>
                  <div className="col-lg-10">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Title" 
                    value={this.state.postTitle}
                    onChange={this.handleTitleChange}
                    required/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="select" className="col-lg-2 control-label">
                    Category
                  </label>
                  <div className="col-lg-10">
                    <select 
                    className="form-control" 
                    onChange={this.handleCategoryChange} 
                    value={this.state.category}
                    id="select"
                    required>
                      {categories.map((category) => (
                        <option value={category.name} key={category.name}>{category.name}</option>
                      ))}
                    </select>
                  </div>
                </div>    
                <div className="form-group">
                  <label className="col-lg-2 control-label">Author</label>
                  <div className="col-lg-10">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Author" 
                    onChange={this.handleAuthorChange}
                    value={this.state.author}
                    required/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="textArea" className="col-lg-2 control-label">Body</label>
                  <div className="col-lg-10">
                    <textarea 
                    className="form-control" 
                    rows="6" 
                    id="textArea" 
                    onChange={this.handleBodyChange}
                    value={this.state.body}
                    required>
                    </textarea>
                  </div>
                </div>
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