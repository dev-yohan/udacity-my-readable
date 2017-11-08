import React, {Component} from 'react'
import InputText          from '../forms/InputText'
import InputTextArea      from '../forms/InputTextArea' 
import FlashMessage       from '../shared/FlashMessage'

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: this.props.post.title,
      body: this.props.post.body,
      flashMessage: false,
    }

    this.handleTitleChange    = this.handleTitleChange.bind(this)
    this.handleBodyChange     = this.handleBodyChange.bind(this)
    this.handleSubmit         = this.handleSubmit.bind(this)
  }

  handleTitleChange(event) {
    this.setState({postTitle: event.target.value})
  }

  handleBodyChange(event) {
    this.setState({body: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.editPost(this.props.post.id, {
      title:     this.state.postTitle,
      body:      this.state.body
    })
    this.setState({flashMessage: true})
  }

  render() {
    
    return(
      <div  className="modal fade" id={`editModal_${this.props.id}`} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">
                Edit Post
              </h4>
            </div>
            <div className="modal-body">
              {this.state.flashMessage &&
                <FlashMessage 
                  messageIntro='Well done!'
                  messageInfo=' You successfully edit your post'
                  callbackInfo=' Back to Home'
                  callbackLink='/'
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
          </div>
        </div>    
      </div>    
    )
  }
}

export default EditPost