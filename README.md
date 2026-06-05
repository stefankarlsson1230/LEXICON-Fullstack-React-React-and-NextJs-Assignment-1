# LEXICON - Fullstack React
## React and Next.Js
### Assignment 1 - Book Management System Specification

#### Overview
This document outlines the specifications for a Book Management System built with Next.js 16. The system will allow users to create, read, update, and delete books, with comprehensive validation using Zod and data mutations via Next.js Server Actions.

### Technical Requirements
#### Framework & Libraries
- Next.js 16
- Prisma ORM for database interactions
- Zod for form validation
- Next.js Server Actions for data mutations

#### Database Model
The Prisma schema will define a Book model with the following structure:
```
model Book {
    id          String      @id     @default(cuid())
    title       String
    author      String
    published   DateTime
    isbn        String      @unique
    createdAt   DateTime    @default(now())
    updatedAt   DateTime    @updatedAt

    @@index([isbn])
}
```
### Functional Requirements
#### Book Listing Page
- Display all books in a table/grid format
- Include columns for title, author, publication date, and ISBN
- Include a “Create New Book” button

#### Book Details Page
- Display comprehensive information about a selected book
- URL pattern: /books/[bookId]
- Show title, author, publication date, ISBN, and other metadata
- Include “Edit” and “Delete” buttons
- Implement a “Back to List” navigation option

#### Book Creation
- Provide a form to add new books
- Include fields for title, author, publication date, and ISBN
- Implement Zod validation for all fields
- ISBN validation must follow ISBN-13 format (13 digits)
- Use Server Actions to handle form submission
- Redirect to the book details page upon successful creation

#### Book Update
- Pre-populate form with existing book data
- Implement the same validation as the creation form
- Use Server Actions to handle updates
- Show appropriate success/error messages
- Redirect to the updated book details page

#### Book Deletion
- Implement a confirmation dialog before deletion
- Use Server Actions to handle the deletion process
- Redirect to the book listing page upon successful deletion
- Show appropriate success/error messages

### Validation Requirements
#### Zod Schema for Book Validation
- Title: Required, string, minimum 1 character
- Author: Required, string, minimum 1 character
- Publication Date: Required, valid date object
- ISBN: Required, must follow ISBN-13 format (13 digits), must be unique

#### ISBN-13 Validation
- Must be exactly 13 digits
- Follow the ISBN-13 check digit algorithm (optional)
- Custom error messages for invalid formats

### User Interface Guidelines
#### Layout
- Consistent header and footer across all pages
- Responsive design for mobile, tablet, and desktop
- Accessible according to WCAG guidelines

#### Components
- Well-structured forms with clear labels
- Validation error messages
- Loading states during data operations
- Confirmation dialogs for destructive actions

### Implementation Approach
#### Server Actions
- Create separate server action files for each CRUD operation
- Implement proper error handling and validation
- Return appropriate success/error responses

#### Data Fetching
- Utilize Next.js data fetching patterns (server components)
- Handle loading and error states

#### Routing
- Use App Router for defining routes
- Implement dynamic routes for book details
- Handle redirects after form submissions
