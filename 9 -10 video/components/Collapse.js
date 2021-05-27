//* ilk constructor --> state initialization
//* render metodu ilk defa çalıştı
//* onclick eventi'i çalıştı
//* setState state nesnesini güncelledi --> triggered render (render tekrar çalıştırdı)
//* render metodu güncel JSX'i sayfada gösteriyor

import React from "react";
class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
    };
    // this.showMore = () => {
    //   console.log(this);
    // };

    //this.showMore = this.showMore.bind(this);
  }
  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
    // this.state = {
    //   showContent: true,
    // };
  };

  // showMore() {
  //   this.setState({ showContent: true });
  //   //console.log(this);
  // }

  render() {
    return (
      <div>
        <a className="btn btn-primary w-100" onClick={this.showMore}>
          Link with href
        </a>
        {this.state.showContent ? (
          <div className="collapse show">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
