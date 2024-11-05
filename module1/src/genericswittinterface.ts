{


    // Generic With Interface
interface Developer<T, X = null> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYears: number;
    };
    smartwatch: T;
    bike?: X;  // Make bike optional
}

interface Watch {
    brand: string;
    model: string;
    display: string;
}

const poorDeveloper: Developer<Watch> = {
    name: "amit",
    computer: {
        brand: 'acer',
        model: "x-231",
        releaseYears: 2014,
    },
    smartwatch: {
        brand: 'emilab',
        model: "kw66",
        display: 'amouleate',
    }
};

interface RichSmartwatch {
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
}

interface Bike {
    brand: string;
    model: string;
    engine: string;
}

const richDeveloper: Developer<RichSmartwatch, Bike> = {
    name: "Rich",
    computer: {
        brand: 'HP',
        model: "34424",
        releaseYears: 2024,
    },
    smartwatch: {
        brand: 'apple',
        model: "kw66",
        display: 'amouleate',
        heartTrack: true,
        sleepTrack: true,
    },
    bike: {
        brand: 'Yamaha',
        model: 'x-100',
        engine: '120x0-23',
    }
};


// 
}