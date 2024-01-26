# Getting Started with Create React App

# Music Player

## Overview

This React application replicates a music player interface and includes a form for users to upload music files. The source code includes the new MusicUploadForm component.

## Component Structure

- **App.js**: The main component that sets up the context and renders other components.
- **SongList.js**: Component to display the list of songs.
- **SongRow.js**: Subcomponent to render individual song details within SongList.
- **PlayAllButton.js**: Button to initiate playing all songs (simulated).
- **AddAllButton.js**: Button to add all songs to a queue (simulated).
- **MusicUploadForm.js**: New component below the song list for users to upload music files.

## State Management

The application uses local state for the list of songs and the file selected for upload.

## How to Run Locally

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and go to `http://localhost:3000`.

## Additional Features

- Hover effects for song rows.
- Console messages on button clicks for Play All, Add All, and file uploads.
- Simulated file upload process with a mock progress indicator.
- Visual feedback for the user during the "upload" process.



