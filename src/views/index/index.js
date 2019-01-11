import React, { Component } from "react";
import TextBox from "../../components/TextBox";
import ImageBox from "../../components/ImageBox";

class Index extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="flex-container">
          <TextBox
            heading="Kilka słów o nas"
            subheading="Czyli kim jesteśmy i dokąd zmierzamy"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque quam vitae dignissim lobortis. Integer enim eros, tincidunt eu est a, semper scelerisque mauris. Proin non orci iaculis, aliquam augue eu, varius nibh. Duis velit lectus, convallis ut turpis eu, semper varius ex. Nunc malesuada tincidunt elit nec scelerisque. Fusce pulvinar nunc nec facilisis convallis. Pellentesque ac diam ut nulla scelerisque fringilla. Donec vitae purus et massa tincidunt fringilla tempor et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin porttitor leo lacus. Cras euismod suscipit blandit. Nulla facilisi. Pellentesque maximus quam non lorem pulvinar mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum accumsan eros ac augue molestie congue."
            seeMoreFlag
            seeMoreLink="/list"
          />
          <div className="content-box">
            <div className="flex-container">
              <TextBox text="to jest mały box z tekstem 1" />
              <ImageBox
                imgUrl="https://img.purch.com/rc/800x600/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA0My8zMjcvb3JpZ2luYWwvYXJvdW5kLWEtc3Rhci1zeXN0ZW0tMTYwMC5qcGc="
                text=""
              />

              <ImageBox
                imgUrl="https://img.purch.com/rc/800x600/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA0My8zMjcvb3JpZ2luYWwvYXJvdW5kLWEtc3Rhci1zeXN0ZW0tMTYwMC5qcGc="
                text="Nulla consequat commodo nisl ac mattis. "
              />
              <TextBox text="to jest mały box z tekstem 2" />
            </div>
          </div>
          <ImageBox
            imgUrl="https://images.wallpaperscraft.com/image/night_sky_stars_trees_113820_800x600.jpg"
            text="Budowa domow z drewna..."
          />
          <TextBox
            heading="Nasza oferta"
            subheading="Dowiedz się co mozemy ci zaoferowac"
            text="Donec sodales, justo et rutrum dignissim, nisl lacus finibus odio, condimentum mattis purus sem eu augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean eros lorem, pulvinar eu dolor ac, posuere sollicitudin odio. Curabitur malesuada est quis mauris aliquet, nec viverra enim volutpat. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras euismod mauris in dui mollis posuere pulvinar non elit. Curabitur vitae sodales arcu. Mauris vel tempor orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed massa arcu, viverra sed nisl sit amet, luctus cursus turpis. Curabitur accumsan vel urna sed finibus. Sed turpis risus, tincidunt eget ultricies id, consectetur nec sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;"
            seeMoreFlag
            seeMoreLink="/list"
          />
        </div>
      </div>
    );
  }
}

export default Index;
