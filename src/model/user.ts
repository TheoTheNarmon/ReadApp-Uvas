import { Book } from "./book"
import { Language } from "./author"

export class User {
    id: number
    lastName: string
    firstName: string
    username: string
    birthday: Date
    email: string
    nativeLanguage: Language
    friends: User[]
    readBooks: Book[] = []
    readToBooks: Book[] = []
    readTimeMinAvg: number
    avatar: string
    minTime: number
    maxTime: number
    // favorites:Recommendation[]=[]

    constructor( 
        id: number,
        lastName: string, 
        firstName: string, 
        username: string, 
        birthday: Date, 
        email: string,
        nativeLanguage: Language = Language.SPANISH,
        friends: User[] ,
        readBooks: Book[],
        readToBooks: Book[],
        readTimeMinAvg: number = 100,
        avatar: string = '',
        minTime: number = 0,
        maxTime: number = 0,
        //favorites:Recommendation[]=[]
    ) {
        this.id = id
        this.lastName = lastName
        this.firstName = firstName
        this.username = username
        this.birthday = birthday
        this.email = email
        this.nativeLanguage = nativeLanguage
        this.friends = friends
        this.readBooks = readBooks
        this.readToBooks = readToBooks
        this.readTimeMinAvg = readTimeMinAvg
        this.avatar = avatar
        this.minTime = minTime
        this.maxTime = maxTime
        // this.favorites=favorites
    }

    get displayName(){
        return this.firstName + ' ' + this.lastName
    }
}