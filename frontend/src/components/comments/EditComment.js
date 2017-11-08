import React, {Component} from 'react'
import FlashMessage       from '../shared/FlashMessage'
import InputTextArea      from '../forms/InputTextArea'

class EditComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body,
      flashMessage: false,
    }

    this.handleBodyChange     = this.handleBodyChange.bind(this)
    this.handleSubmit         = this.handleSubmit.bind(this)
  }

  handleBodyChange(event) {
    this.setState({body: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.editComment(this.props.comment.id, {
      timestamp: Date.now(),
      body: this.state.body
    })
    this.setState({flashMessage: true})
  }

  render() {
    return(
      <div  className="modal fade" id="editCommentModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">
                Edit Comment
              </h4>
            </div>
            <div className="modal-body">
              {this.state.flashMessage &&
                <FlashMessage 
                  messageIntro='Well done!'
                  messageInfo=' You successfully edit your comment'
                  callbackInfo=' Back to Post'
                  callbackLink={`/${this.props.category.path}/${this.props.post.id}`}
                />    
              }
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <fieldset>
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

export default EditComment