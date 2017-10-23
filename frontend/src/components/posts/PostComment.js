import React, {Component} from 'react'

class PostComment extends Component {

  constructor(props) {
    super(props);
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
              <form className="form-horizontal">
                <fieldset>
                  <div className="form-group">
                    <label className="col-lg-2 control-label">Author</label>
                    <div className="col-lg-10">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Author" 
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
                      required>
                      </textarea>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
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