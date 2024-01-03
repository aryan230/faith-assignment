"use client";

import { Check, MessageCircle, MonitorPlay, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default function Home() {
  const data = {
    instructor: {
      name: "NITYANAND CHARAN DAS",
      social_media: {
        facebook: true,
        twitter: true,
        youtube: true,
        instagram: true,
      },
    },
    course: {
      title:
        "Learn key life lessons from the Gita: Mind control and conflict resolution",
      fee: {
        amount: 5000,
        currency: "INR",
      },
      inclusions: {
        on_demand_videos: 2,
        live_qa_sessions: true,
        whatsapp_community: true,
      },
      about: {
        html_content:
          "<p>Lorem ipsum text about managing relationships, communication, time management, and forgiveness.</p>",
      },
      what_to_expect: {
        html_content:
          "<ul><li>Learn to mange your relationships</li><li>Better communication</li><li>Time management</li><li>Forgiveness</li></ul>",
      },
      key_topics: {
        html_content:
          "<ol><li>10 written and audio sessions guiding you in decoding the language of numbers so that you can easily receive their insights and messages.</li><li>Intuitive exercises and homework walk you through the energies and values of numbers and number sequences so you can become your own authority.</li><li>Handy reference to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.</li><li>Expert techniques for manifestation offer simple ways to use numbers to co-create with the universe.</li></ol>",
      },
    },
    about_instructor: {
      html_content:
        "<p>Lorem ipsum text about the instructor's background and philosophy.</p>",
    },
    testimonial: {
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
      reviewer_name: "Name of the reviewer",
      reviewer_designation: "Designation of the reviewer",
    },
  };
  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <main>
      <div className="top-banner">
        <div className="top-content">
          <p>{data.instructor.name}</p>
          <h1>{data.course.title}</h1>
        </div>
      </div>
      <div className="middle-div" id="about">
        <div className="middle-left">
          <div className="top-tabs">
            <a href="#about" className="active">
              About
            </a>

            <a href="#instructor">Instructor</a>
            <a href="#test">Reviews</a>
          </div>
          <div className="content">
            <h1>About the course</h1>
            <p>
              Lorem ipsum text about managing relationships, communication, time
              management, and forgiveness.
            </p>
            <h2>What to expect from the course</h2>
            <ul>
              <li>
                <Check size={18} />
                Learn to mange your relationships
              </li>
              <li>
                <Check size={18} />
                Better communication
              </li>
              <li>
                <Check size={18} />
                Time management
              </li>
              <li>
                <Check size={18} />
                Forgiveness
              </li>
            </ul>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: data.course.what_to_expect.html_content,
              }}
            /> */}
            <h2>Key topics covered</h2>

            <ul>
              <li>
                <Check size={18} />
                10 written and audio sessions guiding you in decoding the
                language of numbers so that you can easily receive their
                insights and messages.
              </li>
              <li>
                <Check size={18} />
                Intuitive exercises and homework walk you through the energies
                and values of numbers and number sequences so you can become
                your own authority.
              </li>
              <li>
                <Check size={18} />
                Handy reference to numerical meanings, so you can uncover your
                soul's gifts, challenges, lessons, and purpose – and receive
                spiritual guidance along your path.
              </li>
              <li>
                <Check size={18} />
                Expert techniques for manifestation offer simple ways to use
                numbers to co-create with the universe.
              </li>
            </ul>

            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="middle-right">
          <div className="main-inside-price">
            <span>Course fees</span>
            <h1>₹ 5,000</h1>
            <div className="price-bottom">
              <h2>What's included:</h2>
              <div className="whats-included">
                <span>
                  <MonitorPlay strokeWidth={2} size={16} />2 on-demand videos
                </span>
                <span>
                  <MonitorPlay strokeWidth={2} size={16} />2 live-qa sessions
                </span>
                <span>
                  {" "}
                  <MessageCircle strokeWidth={2} size={16} />
                  whatsapp community
                </span>
              </div>
              <button>Register today</button>
            </div>
          </div>
        </div>
      </div>
      <div className="about-the-instructor" id="instructor">
        <h1>About the Instructor</h1>
        <div className="inside-about">
          <img src="https://pbs.twimg.com/profile_images/1650049387224080384/WAVo3FHK_400x400.jpg" />
          <div className="inside-about-top">
            <div className="inside-about-top-para">
              <p>
                Lorem ipsum text about the instructor's background and
                philosophy
              </p>
            </div>
            <div className="inside-about-handles">
              {" "}
              <span>
                <img
                  src="
                https://seeklogo.com/images/F/facebook-logo-966BBFBC34-seeklogo.com.png"
                  alt=""
                />
                Facebook
              </span>
              <span>
                <img
                  src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000"
                  alt=""
                />
                Twitter
              </span>
              <span>
                <img
                  src="https://seeklogo.com/images/Y/youtube-logo-FF3BEE4378-seeklogo.com.png"
                  alt=""
                />
                Youtube
              </span>
              <span>
                <img
                  src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png"
                  alt=""
                />
                Instagram
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial" id="test">
        <div className="testimonial-inside">
          <h1>
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system."
          </h1>
          <div className="test-bottom">
            <p>Name</p>
          </div>
        </div>
      </div>
    </main>
  );
}
