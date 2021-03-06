# Fantasy Soccer

Name tbd!

Mobile application that provides an improved experience for users seeking in-depth fantasy soccer.

## Screenshots

<img src="/docs/images/Roster.png" width="300" />
<img src="/docs/images/Edit-Lineup.png"  width="300"/>

## Stack

### Client

* Ionic
* React
* Apollo
* TypeScript

### API

* GraphQL

### Server

* TypeScript
* GraphQL Yoga
* Prisma
  * Code located in an NPM package (@josh-kostal/prisma)

### Authentication

* GraphQL Shield (not yet implemented)

### Database

* PostgresSql

## Useful commands

### Prisma

* npx prisma migrate reset
  * Republishes database with seed data
* npx prisma migrate dev --name {migration-name}
  * Create new migration with name

### Server

* npm start

### Client

* npm start

### Prisma Package

* npm version patch
* npm publish
