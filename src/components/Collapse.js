//* ilk constructor --> state initialization
//* render metodu ilk defa çalıştı
//* onclick eventi'i çalıştı
//* setState state nesnesini güncelledi --> triggered render (render tekrar çalıştırdı)
//* render metodu güncel JSX'i sayfada gösteriyor

import React from "react";
class Collapse extends React.Component {
  state = {
    showContent: false,
  };

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  /*
  componentDidMount() {
    console.log("Component Oluşturuldu");
  }

  componentDidUpdate() {
    console.log("Component Güncellendi");
  }*/

  render() {
    return (
      <div>
        <a className="btn btn-primary w-100" onClick={this.showMore}>
          {/*this.props.children.props.cardTitle*/}
          {React.Children.map(
            this.props.children,
            (children) => children.props.cardTitle
          )}
        </a>
        {this.state.showContent ? (
          <div className="collapse show">
            {/*this.props.children*/}
            {React.Children.map(this.props.children, (children) => children)}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
