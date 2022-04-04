import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'in',
    showNews: 20, 
    // category: 'sports',
    // apiKey: 'f75b868ade34455796f828256664044e'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
    apiKey: PropTypes.string
  }

  
  constructor() {
    super();
    // console.log(this.articles);
    this.state = {
      articles : [],
      // articles: this.articles,
      loading: true,
      page: 1,
      totalResults:0,
    };
  }

  async upadteNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.showNews}`;
    this.setState({ loading : true, })
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.props.setProgress(50);
    this.setState({ 
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
     });
     this.props.setProgress(100);
  }

  async componentDidMount() {
    this.upadteNews();
    // // console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.showNews}`;
    // this.setState({ loading : true, })
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // this.setState({ 
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    //  });
  }

  // prevNewsShow = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //     // articles: parsedData.articles,
  //     // loading : false,
  //   });
  //   this.upadteNews();
  //   // console.log("Previous");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.showNews}`;
  //   // this.setState({ loading : true, })
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json()
  //   //     // console.log(parsedData);
  // };

  // nextNewsShow = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //     // articles: parsedData.articles,
  //     // loading : false,
  //   });
  //   this.upadteNews();
  //   // console.log("Next");
  //   // if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.showNews)) {
      
  //   // }
  //   // else{
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.showNews}`;
  //   //   this.setState({ loading : true, })
  //   //   let data = await fetch(url);
  //   //   // console.log(fetch(url));
  //   //   let parsedData = await data.json();
  //   //   // console.log(parsedData);
  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parsedData.articles,
  //   //     loading : false
  //   //   });
  //   //   console.log(Math.ceil);
  //   // }
  // };

  fetchMoreData = async () => {
    this.setState({
      page : this.state.page + 1
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.showNews}`;
    // this.setState({ loading : true, })
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ 
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
     });
  };

  render() {
    return (
      <>
        <div className="container mx-auto my-10 mb-12 relative px-4">
          <h1 className="block text-xl font-medium mb-3 text-black">
            Top News
          </h1>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* {!this.state.loading && this.state.articles.map((element) => { */}
            {this.state.articles.map((element) => {
              return (
                <NewsItems
                  key={element.url}
                  title={element.title ? element.title.slice(0, 45) : ""}
                  desc={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imgUrl={element.urlToImage}
                  pageLink={element.url}
                  publishedAt={element.publishedAt}
                  author={element.author}
                />
              );
            })}
          </div>
          </InfiniteScroll>
          <div className="flex flex-wrap justify-center mt-10">
            {/* <button
              disabled={this.state.page <= 1}
              className={"btn-primary py-2 px-4 m-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 " + ( this.state.page <= 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer') }
              onClick={this.prevNewsShow}
            >
              &#8592; Prev
            </button>
            <button
              disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.showNews)}
              className={"btn-primary py-2 px-4 m-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 " + ( this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.showNews) ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer') }
              onClick={this.nextNewsShow}
            >
              Next &#8594;
            </button> */}
          </div>
        </div>
      </>
    );
  }
}

export default News;
