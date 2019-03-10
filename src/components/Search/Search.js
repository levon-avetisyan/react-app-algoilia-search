import React, {Component} from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import {Route} from 'react-router-dom';
import {Link} from "react-router-dom";

import algoliasearch from "algoliasearch/dist/algoliasearch";

import {
    InstantSearch,
    SearchBox, Hits, Highlight,
    Stats, Pagination, RefinementList
} from 'react-instantsearch/dom';

const client = algoliasearch('E4FZLRODN2', '55793bb977ab3b3ca69d5ad0b428447e');

const index = client.initIndex('android_stash');

const Card = ({hit}) =>
    <div className="card">
        <div className="card-action">
            <Link to={"/card/" + hit.objectID} className="btn btn-secondary card-action-link">View</Link>
            <Link className="card-action-share" to={"/card/" + hit.objectID}>
                <FontAwesomeIcon icon={["fas", "share-square"]}/>
            </Link>
        </div>
        <div className="card-block">
            <h6 className="card-title">
                <Highlight attributeName="name" hit={hit}/>
                <span>
                    <small className="card-author text-muted">
                        <em> by
                            <span className="card-author"><a href={hit.github}> {hit.author}</a></span>
                        </em>
                    </small>
                </span>
            </h6>
            <p className="card-text"><Highlight attributeName="description" hit={hit}/></p>
            <ul className="tag-list list-inline list-unstyled">
                <li className="list-inline-item"><span className="badge badge-secondary">{hit.language}</span></li>
            </ul>
            <p className="card-text card-footer-text">
                <small className="text-muted">Last Updated <span>{hit.updated}</span></small>
                <small className="text-muted text-stars"><i>
                    <FontAwesomeIcon icon={["fas", "star"]}/></i> <span>{hit.stars}</span>
                </small>
            </p>
        </div>
    </div>;

const Content = () =>
    <div>
        <div className="stats-info">
            <div className="stats">
                <Stats/>
            </div>
            {/*<div className="sort">*/}
                {/*<SortBy*/}
                {/*defaultRefinement="android_stash"*/}
                {/*items={[*/}
                {/*{value:'android_stash', label:'Stars'},*/}
                {/*{value:'android_stash', label:'Last Updated'}*/}
                {/*]}/>*/}
            {/*</div>*/}
        </div>
        <hr/>
        <div className="card-columns">
            <Hits hitComponent={Card}/>
        </div>
        <div className="footer">
            <Pagination showLast/>
        </div>
    </div>;

const Sidebar = () =>
    <div className="filter-list">
        <h6>Language</h6>
        <RefinementList attributeName="language"/>
        <hr/>
        <h6>License</h6>
        <RefinementList attributeName="license"/>
    </div>;


class SingleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {card:{}};
    }

    loadSingleCardContent() {
        let objectId = this.props.match.params;
        index.getObject(objectId.id).then(content => {
            this.setState({card:content});
            console.log(this.state);
            return content;
        });
    };

    componentDidMount() {
        this.loadSingleCardContent();
    }

    render() {
        return (
            <div className="signle-card">
                <h1>{this.state.card.name}</h1>
                <h2>{this.state.card.author}</h2>
                <h3>{this.state.card.description}</h3>
            </div>
        )
    }
}


class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <InstantSearch
                    appId="E4FZLRODN2"
                    apiKey="55793bb977ab3b3ca69d5ad0b428447e"
                    indexName="android_stash">
                    <div className="row">
                        <div className="col-9 offset-3">
                            <div className="search-input-wrapper">
                                <SearchBox translastions={{placeholder: 'Search'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="filters">
                                <Sidebar/>
                            </div>
                        </div>
                        <div className="col-9">
                            <Route path={"/card/:id"} exact component={SingleCard}/>
                            <Route path={'/'} exact component={Content}/>
                        </div>
                    </div>
                </InstantSearch>
            </div>
        )
    }
}

export default Search;

