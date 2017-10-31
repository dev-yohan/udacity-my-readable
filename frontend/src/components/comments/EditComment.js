import React, {Component} from 'react'

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
                <div className='row'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div className="alert alert-dismissible alert-success">
                      <button type="button" className="close" data-dismiss="alert">
                        &times;
                      </button>
                      <strong>Well done!</strong> You successfully edit your comment 
                    </div> 
                  </div>
                </div>    
              }
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                  <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <fieldset>
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
          </div>
        </div>    
      </div>    
    )
  }
}

export default EditComment