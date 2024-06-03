import React from "react";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="bg-bg-color">
      <div className="container mx-4 p-2 bg-bg-color">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="">
            <img
              src="\images\mp.png"
              alt="Lea Jacquet"
              className="w-176px h-27px  mr-2"
            />
          </div>
          <div className="flex justify-end">
            <div className="flex space-x-4 bg-gray-100 p-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href="https://discord.com"
                aria-label="Discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} size="lg" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
