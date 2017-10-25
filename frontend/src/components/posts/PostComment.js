import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as Guid from '../../util/guid'

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
                <div className='row'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div className="alert alert-dismissible alert-success">
                      <button type="button" className="close" data-dismiss="alert">
                        &times;
                      </button>
                      <strong>Well done!</strong> You successfully save a new comment 
                        <a href={`/${this.props.category.path}/${this.props.postId}`} className="alert-link"> 
                          {' Back to Post'}
                        </a>.
                    </div> 
                  </div>
                </div>    
              }
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <fieldset>
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