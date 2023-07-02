import { TAction } from "../types/reducerTypes";

const initState = {
    movies: [
        {
            id: 1,
            title: 'The dark knight',
            description: 'Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы от преступности, отравляющей город. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным испуганным горожанам под именем Джокер.',
            year: 2007,
            image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            video: 'https://www.youtube.com/embed/dFlDRhvM4L0',
            rating: 4.6,
        },{
            id: 2,
            title: 'Spider-man',
            description: 'Питер Паркер – обыкновенный школьник. Однажды он отправился с классом на экскурсию, где его кусает странный паук-мутант. Через время парень почувствовал в себе нечеловеческую силу и ловкость в движении, а главное – умение лазать по стенам и метать стальную паутину. Свои способности он направляет на защиту слабых. Так Питер становится настоящим супергероем по имени Человек-паук, который помогает людям и борется с преступностью. Но там, где есть супергерой, рано или поздно всегда объявляется и суперзлодей...',
            year: 2002,
            image: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Spider-Man2002Poster.jpg',
            video: 'https://www.youtube.com/embed/dFlDRhvM4L0',
            rating: 4.9,
        },{
            id: 3,
            title: 'Aquaman',
            description: 'Артур Карри был сыном работника маяка по имени Том Карри и женщины по имени Атланна. Артур уже в подростковом возрасте демонстрировал невероятную силу и скорость, а также возможность дышать под водой и разговаривать с рыбами. Будучи при смерти, Атланна раскрыла мальчику правду: она была Королевой Атлантиды, находившейся в изгнании, и пообещала, что однажды Артур станет правителем семи морей. Его отец дал ему образование и научил управлять своими возможностями, что в конечном итоге помогло ему стать героем по имени Аквамен.',
            year: 2021,
            image: 'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_.jpg',
            video: 'https://www.youtube.com/embed/dFlDRhvM4L0',
            rating: 4.2,
        },

    ]
}

const ADD_MOVIE = 'ADD_MOVIE';

export const movieReducer = (state = initState, action: TAction) => {
    switch(action.type){
        case ADD_MOVIE:
            return {...state, movies: [...state.movies, action.payload]};
        default:
            return state;
    }
}