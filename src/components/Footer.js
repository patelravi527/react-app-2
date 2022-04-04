import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <>
        <footer className="px-3 py-8 bg-gray-800 text-2 text-gray-500 transition-colors duration-200">
          <div className="flex flex-col container mx-auto ">
            <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full"></div>
            <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
              <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full "></div>
              <div className="mt-7 md:mt-0 flex-1 flex justify-center md:items-start md:pl-5">
                <span className="mt-7 md:mt-1 text-white">
                © 2022 Created by Ravi patel.
                </span>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
