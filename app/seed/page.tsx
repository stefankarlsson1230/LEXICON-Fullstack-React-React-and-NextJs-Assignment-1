import prisma from "@/lib/prisma";

export default async function SeedPage() {
    
type Book = {
  title: string;
  author: string;
  published: Date;
  ISBN: string;
}

const books: Book[] = [
  { title: "Sagan om ringen", author: "J.R.R. Tolkien", published: new Date("1954-07-29"), ISBN: "978-0544003415" },
  { title: "Dune", author: "Frank Herbert", published: new Date("1965-08-01"), ISBN: "978-0441172719" },
  { title: "Harry Potter och de vises sten", author: "J.K. Rowling", published: new Date("1997-06-26"), ISBN: "978-0439708180" },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", published: new Date("2007-03-27"), ISBN: "978-0756404079" },
  { title: "Ender's Game", author: "Orson Scott Card", published: new Date("1985-01-15"), ISBN: "978-0312932084" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", published: new Date("1937-09-21"), ISBN: "978-0547928227" },
  { title: "A Game of Thrones", author: "George R.R. Martin", published: new Date("1996-08-06"), ISBN: "978-0553103540" },
  { title: "Neuromancer", author: "William Gibson", published: new Date("1984-07-01"), ISBN: "978-0441569595" },
  { title: "The Way of Kings", author: "Brandon Sanderson", published: new Date("2010-08-31"), ISBN: "978-0765326355" },
  { title: "Foundation", author: "Isaac Asimov", published: new Date("1951-06-01"), ISBN: "978-0553293357" },
  { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", published: new Date("1950-10-16"), ISBN: "978-0064471046" },
  { title: "Hyperion", author: "Dan Simmons", published: new Date("1989-05-26"), ISBN: "978-0553283686" },
  { title: "The Blade Itself", author: "Joe Abercrombie", published: new Date("2006-09-07"), ISBN: "978-0316387316" },
  { title: "Snow Crash", author: "Neal Stephenson", published: new Date("1992-06-01"), ISBN: "978-0553380958" },
  { title: "The Fifth Season", author: "N.K. Jemisin", published: new Date("2015-08-04"), ISBN: "978-0316229296" },
  { title: "Stranger in a Strange Land", author: "Robert A. Heinlein", published: new Date("1961-05-01"), ISBN: "978-0441788385" },
  { title: "The Eye of the World", author: "Robert Jordan", published: new Date("1990-01-15"), ISBN: "978-0812511819" },
  { title: "Do Androids Dream of Electric Sheep?", author: "Philip K. Dick", published: new Date("1968-01-01"), ISBN: "978-0345404473" },
  { title: "The Poppy War", author: "R.F. Kuang", published: new Date("2018-05-01"), ISBN: "978-0062662569" },
  { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", published: new Date("1969-03-01"), ISBN: "978-0441478125" },
  { title: "Mistborn: The Final Empire", author: "Brandon Sanderson", published: new Date("2006-07-17"), ISBN: "978-0765350381" },
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", published: new Date("1979-10-12"), ISBN: "978-0345391803" },
  { title: "The Priory of the Orange Tree", author: "Samantha Shannon", published: new Date("2019-02-26"), ISBN: "978-1635570298" },
  { title: "The Martian", author: "Andy Weir", published: new Date("2014-02-11"), ISBN: "978-0553418026" },
  { title: "American Gods", author: "Neil Gaiman", published: new Date("2001-06-19"), ISBN: "978-0380789030" },
  { title: "The Martian Chronicles", author: "Ray Bradbury", published: new Date("1950-05-01"), ISBN: "978-0553278224" },
  { title: "Gideon the Ninth", author: "Tamsyn Muir", published: new Date("2019-09-10"), ISBN: "978-1250313195" },
  { title: "Project Hail Mary", author: "Andy Weir", published: new Date("2021-05-04"), ISBN: "978-0593135204" }
];

 
    let databaseEmpty: boolean = (await prisma.book.findMany()).length === 0

    if (databaseEmpty) {
        await seedDatabase();
        databaseEmpty = false;
        return <p>The database is now filled!</p>;
    }
    else {
         return <p>The database was already full</p>;
    }
 
    
 async function seedDatabase() {
        await Promise.all (
            books.map((book) => 
                prisma.book.create({
                    data: {
                        title: book.title,
                        author: book.author,
                        published: book.published,
                        isbn: book.ISBN
                    }
                })
            )
        )
    }


}

