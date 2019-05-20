import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <Title title="How to use the service"> </Title>
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              voluptatem impedit aliquam consequuntur soluta expedita et illo
              nesciunt nobis iusto ullam obcaecati deserunt dolorum modi iste
              perferendis temporibus dignissimos vero voluptatibus, animi veniam
              delectus similique consectetur mollitia? Velit autem facilis quos
              consequatur corrupti cum error numquam consequuntur et quam harum
              facere provident, nulla incidunt natus, sequi nisi voluptatibus
              iusto minima? Numquam minus deserunt nam ut eaque, similique
              voluptate accusamus consequuntur dolore mollitia id asperiores
              magnam nihil ullam sunt sed totam veniam magni harum aperiam
              voluptas quis? Officiis consequuntur explicabo, maiores vel
              labore, placeat fugiat porro id, error facere nulla
              exercitationem.
            </p>
            <Link to="/insruction/">
              <button className="btn text-uppercase btn-Seawave">
                Insruction
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
