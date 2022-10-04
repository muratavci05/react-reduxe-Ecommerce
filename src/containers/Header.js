import React from "react";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        
                  <div className="ui fixed menu">
                  <div className="ui one aling stackable padded grid white">
                      <h2 className="ui header gray center segment Teal column ">FakeShop</h2></div>
            <a href="http://localhost:3000/" className="active item">
              Home
            </a>
            <a className="item">
              Categories
            </a>
            <a className="item">
              Favorite
            </a>
            
            
            <div className="right menu">
              <div className="item">
                <div className="ui transparent icon input">
                  <input type="text" placeholder="Search..."/>
                  <i className="search link icon"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment">
            <p></p>
          </div>

      </div>
    </div>
  );
};

export default Header;
