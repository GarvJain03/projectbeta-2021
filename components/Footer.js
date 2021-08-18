import React from "react";

function Footer() {
  return (
    <div>
      <footer class="text-gray-600 body-font">
        <div>
          <div class="container mx-auto py-4 px-5 flex flex-col sm:flex-col">
            <p
              style={{ color: "#010101", fontSize: "17px" }}
              class="text-gray-500 text-sm text-center sm:text-center"
            >
              Made with <span style={{ color: "red" }}>{"<3 "}</span>by Exun
              Clan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
