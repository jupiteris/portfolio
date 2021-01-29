/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Section, Div, Box, Icons } from "./Work.style";
import Container from "../../components/Container";
import Placeholder from "../../components/Placeholder/Placeholder";
import { projects } from "../../config";
import { FiGithub, FiGlobe } from "react-icons/fi";

class Work extends React.Component {
  state = {
    itemsToShow: 6,
    expanded: false,
  };

  componentDidMount = () => {
    const button = document.querySelector(".show");

    button &&
      button.addEventListener("mousemove", (e) => {
        const { x, y } = button.getBoundingClientRect();
        button.style.setProperty("--x", e.clientX - x);
        button.style.setProperty("--y", e.clientY - y);
      });
  };

  showMore = () => {
    this.state.itemsToShow === 6
      ? this.setState({ itemsToShow: projects.length, expanded: true })
      : this.setState({ itemsToShow: 6, expanded: false });
  };

  render() {
    return (
      <>
        <Section id="work">
          <Container>
            <Placeholder title="Projects"></Placeholder>
            <Div>
              {projects
                .slice(0, this.state.itemsToShow)
                .map((project, index) => {
                  const { link, title, source, description } = project;
                  return (
                    <Box key={index}>
                      <Icons>
                        {source ? (
                          <a
                            href={source}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="go to repo"
                          >
                            <FiGithub className="icons" />
                          </a>
                        ) : (
                          ""
                        )}
                        {link ? (
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="view on your browser"
                          >
                            <FiGlobe className="icons" />
                          </a>
                        ) : (
                          ""
                        )}
                      </Icons>
                      <h2>{title}</h2>
                      <p className="desc">{description}</p>
                    </Box>
                  );
                })}
            </Div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a onClick={this.showMore} className="show">
                {this.state.expanded ? "Show Less" : "Show More"}
              </a>
            </div>
          </Container>
        </Section>
      </>
    );
  }
}

export default Work;
