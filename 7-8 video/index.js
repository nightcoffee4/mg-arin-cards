import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse href="collapseExample1">
              <Card
                cardTitle="Card Title1"
                cardText="Lorem Text Text Text1"
                updatedTime="7 min ago"
                image="https://picsum.photos/id/1/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample2">
              <Card
                cardTitle="Card Title2"
                cardText="Lorem Text Text Text2"
                updatedTime="5 min ago"
                image="https://picsum.photos/id/10/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample3">
              <Card
                cardTitle="Card Title3"
                cardText="Lorem Text Text Text3"
                updatedTime="3 min ago"
                image="https://picsum.photos/id/100/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

/*
Propslar componentsler arası veri iletişimini, özellik iletimini sağlar.
tek yönde olur
bu özellikleri parent yani ana componentte belirleriz
child component vasıtası ile gösteririz
tek bir parentten child componente doğrudur.
Child componentte yeni attributes belirleyeceğiz.
<Card cardTitle="" />
*/
