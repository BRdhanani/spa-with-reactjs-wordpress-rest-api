import React from 'react'

export default function ExamplePage(props) {
    const { page } = props;
    return (
        <div class={"page"}>
            <h1 class={"page-title"}>{page.post_title.rendered}</h1>
            <div class={"page-content"} dangerouslySetInnerHTML={{ __html: props.page.post_content.rendered }}/>
        </div>
    )
}