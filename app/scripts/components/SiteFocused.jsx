import React, { Component } from 'react';
import SiteHeader from './SiteHeader.jsx'

class SiteFocused extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.beforeMount( this.props.site )
  }

  render(){
    let images = null
    if( this.props.site.imageUrls ){
      images = this.props.site.imageUrls.map((image,index)=>{
        return <img className="img-responsive" key={image} src={image} ></img>
      })
    }
    return (
      <div>
        <SiteHeader
          site={this.props.site}
          showingMap={false}
          onToggleView={this.props.onToggleView}
          onClickClose={this.props.onClickClose}
        />
        <div className='container'>
          { images }
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="panel-body-content">
                <h4 className="text-muted text-small">Description</h4>
                <div dangerouslySetInnerHTML={{__html: this.props.site.short_description_en}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default SiteFocused
