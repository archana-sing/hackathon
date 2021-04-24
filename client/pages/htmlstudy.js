import React from 'react'
import Image from 'next/image'
import Styles from '../styles/study.module.css'



const htmlstudy = () => {
    return (
        <>
        <div className = {Styles.container_main}> </div>
        <div className = {Styles.container}>
        <div>
            <h2 className = {Styles.headings}>1. HTML Documents</h2>
            <ul>
            <li className = {Styles.para}>All HTML documents must start with a document type declaration:&lt;!DOCTYPE html&gt;</li>
            <li className = {Styles.para}>The HTML document itself begins with &lt;html&gt;and ends with &lt;/html&gt;.</li>
            <li className = {Styles.para}>The visible part of the HTML document is between &lt;body&gt; and &lt;/body&gt;</li>
            </ul>
            
           
        </div>
        <div>
            <h2 className = {Styles.headings}>2.The &lt;!DOCTYPE&gt; Declaration</h2>
            <ul>
            <li className = {Styles.para}>The &lt;!DOCTYPE html&gt; declaration represents the document type, and helps browsers to display web pages correctly.</li>
            <li className = {Styles.para}>It must only appear once, at the top of the page (before any HTML tags).</li>
            <li className = {Styles.para}>The &lt;!DOCTYPE&gt; declaration is not case sensitive.</li>
            <li className = {Styles.para}>The &lt;!DOCTYPE&gt; declaration for HTML5 is:&lt;!DOCTYPE html&gt;</li>
            </ul>
           
            
        </div>
        <div>
            <h2 className = {Styles.headings}>3.HTML Headings</h2>
            <li className = {Styles.para}>HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags.</li>
            <li className = {Styles.para}>&lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least important heading: </li>
            <Image className = {Styles.img} src = "/heading.png" alt= "" width = "600px" height = "300px"/>
        </div>
        <div>
            <h2 className = {Styles.headings}>3.HTML Paragraphs</h2>
            <li className = {Styles.para}>HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags.</li>
            <li className = {Styles.para}>&lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least important heading: </li>
            <Image className = {Styles.img} src = "/para.png" alt= "" width = "600px" height = "300px"/>
        </div>
        <div>
            <h2 className = {Styles.headings}>4.HTML Links</h2>
            <li className = {Styles.para}>HTML links are defined with the  &lt;a&gt; tag:</li>
            <Image className = {Styles.img} src = "/imag.png" alt= "" width = "600px" height = "200px"/>
        </div>
        </div>
        
       
        </>
    )
}

export default htmlstudy
