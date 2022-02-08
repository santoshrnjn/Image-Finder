import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';

const Searchbox = ({ input, setInput }) => {
    return (
        <div>
            <DebounceInput
                minLength={3}
                debounceTimeout={300}
                type="text"
                name="Photo Search"
                placeholder="Search for Photos" className="searchBox"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
};

export default Searchbox;
