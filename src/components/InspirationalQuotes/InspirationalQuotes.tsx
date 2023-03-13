import { useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';
import filterQuotes from '../../lib/filter-quotes';
import QuoteFilter from './filters';

export type Quote = {
    id: number;
    content: string;
    source?: string;
};

export const fetchRandomQuote = async () => {
    const response = await fetch(`/api/quotes/random`);
    // const response = await fetch(`/api/quotes`);
    console.log(response);

    return response.json();
};

// export const fetchQuotes = async (count: number) => {
//     const response = await fetch(`/api/quotes?limit=${count}`);
//     return response.json();
// };

const InspirationalQuote_app = () => {
    const [quote, setQuote] = useState<Quote | undefined>();

    console.log("default", quote);


    useEffect(() => {
        console.log("I'm use effect", quote);

        fetchRandomQuote().then(setQuote).then(() => console.log("this", quote?.content));
        console.log("I'm use effect2", quote);
    }, []);

    if (!quote) return <Loading />;
    return (
        <main className="w-full max-w-2xl py-16 mx-auto">
            <InspirationalQuote content={quote.content} source={quote.source} />
            {/* <Quotes>
                <div className="grid grid-cols-2 gap-4"></div>
            </Quotes> */}
        </main>
    );
};
export default InspirationalQuote_app;