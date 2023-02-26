import React, {Fragment, useRef} from "react";

import "./MyDesign.css"

const MyDesign = (props) => {

    let contentRef=useRef();

    return (
        <div>
            <div className="Mynavbar">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">Task Manager</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Dashboard <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/CreatePage">Create New</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/NewPage">New Task</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/ProgressPage">In Progress</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/CompletedPage">Completed</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/CanceldPage">Canceled</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2"  type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </nav>
            </div>

            <div className="Main_View_Desin">
                <div ref={(div) => contentRef = div} className="content">
                    {props.children}
                </div>
            </div>

        </div>
    );
};

export default MyDesign;