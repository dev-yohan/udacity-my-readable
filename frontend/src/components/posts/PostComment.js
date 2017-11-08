import React, {Component} from 'react'
import FlashMessage       from '../shared/FlashMessage'
import InputText          from '../forms/InputText'
import InputTextArea      from '../forms/InputTextArea'
import * as Guid          from '../../util/guid'

class PostComment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      body: '',
      flashMessage: false,
      
    }
    this.handleSubmit         = this.handleSubmit.bind(this)
    this.handleAuthorChange   = this.handleAuthorChange.bind(this)
    this.handleBodyChange     = this.handleBodyChange.bind(this)
    this.cleanForm            = this.cleanForm.bind(this)
    
  }

  cleanForm(){
    this.setState({
      author: '',
      body: '',
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.createPostComment({
      id:        Guid.getGuid(),
      parentId:  this.props.postId, 
      author:    this.state.author,
      body:      this.state.body,
      timestamp: Date.now()
    });
    this.setState({flashMessage: true})    
    this.cleanForm()
  }

  handleAuthorChange(event) {
    this.setState({author: event.target.value})
  }

  handleBodyChange(event) {
    this.setState({body: event.target.value})
  }

  render() {
    return(
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">
                Add new comment
              </h4>
            </div>
            <div className="modal-body">
              {this.state.flashMessage &&
                <FlashMessage 
                  messageIntro='Well done!'
                  messageInfo=' You successfully save a new comment'
                  callbackInfo=' Back to Post'
                  callbackLink={`/${this.props.category.path}/${this.props.postId}`}
                />
              }
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <fieldset>
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
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Save changes</button>
                  </div>
                </fieldset>
              </form>    
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostComment