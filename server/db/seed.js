// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Promise = require('bluebird');
const chalk = require('chalk')
const {
    db,
    User,
    UserDaycare,
    Daycare,
    DayImg,
    Feedback
} = require('./models');

var data = {
    user: [
        { name: "Alice Wiggin", email: "AW@test.com", street: "852 Central Ave", city: "Deerfield", state: "IL", zipcode: "60015", phone: "(158) 156-0219", imgUrl: "https://robohash.org/Alice_Wiggin" },
        { name: "Bob Daniels", email: "BD@test.com", street: "1044 Brookside Ln", city: "Deerfield", state: "IL", zipcode: "60015", phone: "(687) 122-0414", imgUrl: "https://robohash.org/Bob_Daniels" },
        { name: "Andrew Katz", email: "AK@test.com", street: "699 Deerpath Dr", city: "Deerfield", state: "IL", zipcode: "60015", phone: "(120) 442-3619", imgUrl: "https://robohash.org/Andrew_Katz" },
        { name: "Suzy Rogers", email: "SR@test.com", street: "1100 Deerfield Rd", city: "Deerfield", state: "IL", zipcode: "60015", phone: "(783) 781-1688", imgUrl: "https://robohash.org/Suzy_Rogers" },
    ],
    daycare: [
        {name: "The Gingerbread House", email: "The_Gingerbread_House@test.com", street: "846 central ave", city: "deerfield", state: "IL", zipcode: "60015", phone: "(125) 261-9821", contact: "Ruth Mullins", description: "At The Gingerbread House,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "590", priceUnit: "weekly", style: "In-Home" },
{name: "The Learning Tree", email: "The_Learning_Tree@test.com", street: "75 West 10th Street ", city: "Algonquin", state: "IL", zipcode: "60102", phone: "(692) 176-0053", contact: "Willard Jackson", description: "At The Learning Tree,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "250", priceUnit: "weekly", style: "Daycare Center" },
{name: "Babes n' Tots", email: "Babes_n'_Tots@test.com", street: "77 w jackson blvd", city: "chicago", state: "IL", zipcode: "60604", phone: "(931) 841-7922", contact: "Herman Warner", description: "At Babes n' Tots,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "345", priceUnit: "weekly", style: "Nanny" },
{name: "Lamb Tails", email: "Lamb_Tails@test.com", street: "201 Henry Street ", city: "Berwyn", state: "IL", zipcode: "60402", phone: "(159) 794-9574", contact: "Nina Miles", description: "At Lamb Tails,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "330", priceUnit: "weekly", style: "In-Home" },
{name: "Happy Trails Daycare", email: "Happy_Trails_Daycare@test.com", street: "7350 Howard Road ", city: "Carpentersville", state: "IL", zipcode: "60110", phone: "(325) 186-4021", contact: "Christie Luna", description: "At Happy Trails Daycare,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "1260", priceUnit: "monthly", style: "Daycare Center" },
{name: "Little Ducklings Daycare", email: "Little_Ducklings_Daycare@test.com", street: "78 Colonial Ave. ", city: "Champaign", state: "IL", zipcode: "61821", phone: "(517) 339-1796", contact: "Bobbie Pierce", description: "At Little Ducklings Daycare,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "1570", priceUnit: "monthly", style: "Nanny" },
{name: "Rainbow Children", email: "Rainbow_Children@test.com", street: "982 Andover Court ", city: "Chicago Heights", state: "IL", zipcode: "60411", phone: "(318) 788-8544", contact: "Erin Nguyen", description: "At Rainbow Children,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "1860", priceUnit: "monthly", style: "In-Home" },
{name: "Play Safe Playhouse", email: "Play_Safe_Playhouse@test.com", street: "948 w madison st", city: "chicago", state: "IL", zipcode: "60607", phone: "(932) 409-4699", contact: "Warren Cannon", description: "At Play Safe Playhouse,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "2410", priceUnit: "monthly", style: "Daycare Center" },
{name: "The Children's Cloud", email: "The_Children's_Cloud@test.com", street: "16 e pearson st", city: "chicago", state: "IL", zipcode: "60611", phone: "(510) 559-8806", contact: "Patti Wheeler", description: "At The Children's Cloud,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "11730", priceUnit: "annually", style: "Nanny" },
{name: "Kiddie Cloud", email: "Kiddie_Cloud@test.com", street: "1448 n sedgwick st", city: "chicago", state: "IL", zipcode: "60610", phone: "(783) 621-1537", contact: "Dwight Byrd", description: "At Kiddie Cloud,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "14600", priceUnit: "annually", style: "In-Home" },
{name: "TOTally Kids", email: "TOTally_Kids@test.com", street: "900 s wabash ave", city: "chicago", state: "IL", zipcode: "60605", phone: "(656) 464-2574", contact: "Marta Jordan", description: "At TOTally Kids,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "11210", priceUnit: "annually", style: "Daycare Center" },
{name: "Stop n' Play", email: "Stop_n'_Play@test.com", street: "1339 1 19th st", city: "chicago", state: "IL", zipcode: "60608", phone: "(415) 139-9072", contact: "Mark Evans", description: "At Stop n' Play,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "11470", priceUnit: "annually", style: "Nanny" },
{name: "Learn n' Play", email: "Learn_n'_Play@test.com", street: "47 Fieldstone Rd. ", city: "Geneva", state: "IL", zipcode: "60134", phone: "(184) 563-8766", contact: "Marty Shelton", description: "At Learn n' Play,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "94", priceUnit: "daily", style: "In-Home" },
{name: "Mother Goose's Playschool", email: "Mother_Goose's_Playschool@test.com", street: "47 Mulberry St. ", city: "Glen Ellyn", state: "IL", zipcode: "60137", phone: "(801) 483-4847", contact: "Priscilla Franklin", description: "At Mother Goose's Playschool,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "88", priceUnit: "daily", style: "Daycare Center" },
{name: "Children's Den", email: "Children's_Den@test.com", street: "530 Hanover Rd. ", city: "Glenview", state: "IL", zipcode: "60025", phone: "(742) 188-3084", contact: "Jane Newton", description: "At Children's Den,  we understand that your child’s education and care is a priority and that choosing the right program is a big decision. Our early education programs and schools include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.", hours: "M-F 7:00 am - 4:00 pm", price: "89", priceUnit: "daily", style: "Nanny" },
    ],
    dayImg: [
        { imgUrl: "/Images/1.jpeg", daycareId: "1" },
        { imgUrl: "/Images/2.jpeg", daycareId: "1" },
        { imgUrl: "/Images/3.jpeg", daycareId: "2" },
        { imgUrl: "/Images/4.jpeg", daycareId: "2" },
        { imgUrl: "/Images/5.jpeg", daycareId: "3" },
        { imgUrl: "/Images/6.jpeg", daycareId: "3" },
        { imgUrl: "/Images/7.jpeg", daycareId: "4" },
        { imgUrl: "/Images/8.jpeg", daycareId: "4" },
        { imgUrl: "/Images/9.jpeg", daycareId: "5" },
        { imgUrl: "/Images/10.jpeg", daycareId: "5" },
        { imgUrl: "/Images/11.jpeg", daycareId: "6" },
        { imgUrl: "/Images/12.jpeg", daycareId: "6" },
        { imgUrl: "/Images/13.jpeg", daycareId: "7" },
        { imgUrl: "/Images/14.jpeg", daycareId: "7" },
        { imgUrl: "/Images/15.jpeg", daycareId: "8" },
        { imgUrl: "/Images/16.jpeg", daycareId: "8" },
        { imgUrl: "/Images/17.jpeg", daycareId: "9" },
        { imgUrl: "/Images/18.jpeg", daycareId: "9" },
        { imgUrl: "/Images/19.jpeg", daycareId: "10" },
        { imgUrl: "/Images/20.jpeg", daycareId: "10" },
        { imgUrl: "/Images/21.jpeg", daycareId: "11" },
        { imgUrl: "/Images/22.jpeg", daycareId: "11" },
        { imgUrl: "/Images/23.jpeg", daycareId: "12" },
        { imgUrl: "/Images/24.jpeg", daycareId: "12" },
        { imgUrl: "/Images/25.jpeg", daycareId: "13" },
        { imgUrl: "/Images/26.jpeg", daycareId: "13" },
        { imgUrl: "/Images/27.jpeg", daycareId: "14" },
        { imgUrl: "/Images/28.jpeg", daycareId: "14" },
        { imgUrl: "/Images/29.jpeg", daycareId: "15" },
        { imgUrl: "/Images/30.jpeg", daycareId: "15" },
    ],
    userDaycare: [
        { rating: "3", favorite: "TRUE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "1", userId: "1" },
        { rating: "4", favorite: "TRUE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "2", userId: "1" },
        { rating: "3", favorite: "TRUE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "3", userId: "1" },
        { rating: "0", favorite: "FALSE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "4", userId: "1" },
        { rating: "2", favorite: "FALSE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "5", userId: "1" },
        { rating: "2", favorite: "FALSE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "6", userId: "1" },
        { rating: "3", favorite: "FALSE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "7", userId: "1" },
        { rating: "1", favorite: "FALSE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "8", userId: "1" },
        { rating: "2", favorite: "FALSE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "9", userId: "1" },
        { rating: "2", favorite: "FALSE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "10", userId: "1" },
        { rating: "2", favorite: "FALSE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "11", userId: "1" },
        { rating: "3", favorite: "FALSE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "12", userId: "1" },
        { rating: "1", favorite: "FALSE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "13", userId: "1" },
        { rating: "1", favorite: "FALSE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "14", userId: "1" },
        { rating: "0", favorite: "FALSE", userNotes: "User puts their private notes here!", review: "User can put public review info here!", daycareId: "15", userId: "1" },
    ],
    feedback: [
        { subject: "test1", content: "This is some content about feedback message test1!!", category: "Question", userId: "1" },
        { subject: "test2", content: "This is some content about feedback message test2!!", category: "Question", userId: "1" },
        { subject: "test3", content: "This is some content about feedback message test3!!", category: "Question", userId: "2" },
        { subject: "test4", content: "This is some content about feedback message test4!!", category: "Question", userId: "3" },
        { subject: "test5", content: "This is some content about feedback message test5!!", category: "Question", userId: "4" },
    ]
};

db.sync({ force: true })
    .then(function () {
        console.log(chalk.yellow("Dropped old data, now inserting the seed data"));
        return Promise.map(Object.keys(data), (name) => {
            return Promise.map(data[name], function (item) {
                return db.model(name)
                    .create(item);
            });
        });
    })
    .then(function () {
        console.log(chalk.green("Finished inserting data (press ctrl-c to exit)"));
        process.exit()
    })
    .catch(function (err) {
        console.error(chalk.red('There was totally a problem', err, err.stack));
    });


