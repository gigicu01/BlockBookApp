import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }: { details: any }) {

    const [searchField, setSearchField] = useState("");

    const filteredNFTs = details.filter(
        (Post: { Username: string; description: string; owner: string; }) => {
            return (
                Post
                    .Username
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                Post
                    .description
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                Post
                    .owner
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchField(e.target.value);
    };

    function searchList() {
        return (
            <Scroll>
                <SearchList filteredNFTs={filteredNFTs} />
            </Scroll>
        );
    }

    return (
        <section className="midcol">
            <div className="midcol">
            </div>
            <div className="container">
                <input
                    className="midcol"
                    type="search"
                    placeholder="Search..."
                    onChange={handleChange}
                />
                <div className="search"></div>
            </div>
            {searchList()}
        </section>
    );
}

export default Search;