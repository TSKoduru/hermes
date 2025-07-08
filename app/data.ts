type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Gamehawk',
    description: 'An automated wordhunt solver.',
    link: 'https://github.com/TSKoduru/gamehawk',
    video: '/videos/gamehawk.mp4',
    id: 'project1',
  },
  {
    name: 'DIALGA',
    description: 'A sleek and nerdy binary watch PCB.',
    link: 'https://github.com/TSKoduru/DIALGA',
    video: '/videos/dialga.mp4',
    id: 'project2',
  },
  {
    name: 'SIFT',
    description: 'A tool to help find you new recipes.',
    link: 'https://github.com/TSKoduru/SIFT',
    video: '/videos/SIFT.mp4',
    id: 'project3',
  },
  {
    name: 'LANTERN',
    description: 'Diagnose Lyme disease quickly and effectively.',
    link: 'https://github.com/TSKoduru/LANTERN',
    video: '/videos/LANTERN.mp4',
    id: 'project4',
  },
  {
    name: 'Celestia',
    description: 'A python-based n-body simulation.',
    link: 'https://github.com/TSKoduru/NBodySimulation',
    video: '/videos/nbody.mp4',
    id: 'project5',
  },
  {
    name: 'YTtoSpotify',
    description: 'Convert youtube playlists to spotify.',
    link: 'https://github.com/TSKoduru/YTtoSpotify',
    video: '/videos/yttospotify.mp4',
    id: 'project6',
  },
  {
    name: 'Littlefinger',
    description: 'A work in progress...',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    video: '/videos/littlefinger.mp4',
    id: 'project7',
  },
  {
    name: 'HERMES',
    description: 'Why does this look so familiar?',
    link: 'https://github.com/TSKoduru/TSKoduru.github.io',
    video: '/videos/HERMES.mp4',
    id: 'project8',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'MIT Lincoln Laboratories',
    title: 'Software/Controls Intern',
    start: 'May 2025',
    end: 'Present',
    link: 'https://www.ll.mit.edu/',
    id: 'work1',
  },
  {
    company: 'SpaceX',
    title: 'Software/Avionics Intern',
    start: 'January 2025',
    end: 'May 2025',
    link: 'https://www.spacex.com/',
    id: 'work2',
  },
  {
    company: 'Kitware',
    title: 'Software Engineering Intern',
    start: 'June 2024',
    end: 'September 2024',
    link: 'https://www.kitware.com/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Why write?',
    description: '(Short version: I hopped on the bandwagon)',
    link: '/blog/why-blog',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/TSKoduru',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/tskoduru/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/te.ja09/',
  },
]

export const EMAIL = 'tkoduru@umich.edu'

export const PHOTOS = [
  { src: '/photos/Boat.jpg', orientation: 'landscape' },
  { src: '/photos/Fenway.jpg', orientation: 'landscape' },
  { src: '/photos/Amber.jpg', orientation: 'portrait' },
  { src: '/photos/NYC.jpg', orientation: 'portrait' },
]

export const playlists = [
  {
    name: '2025',
    url: 'https://open.spotify.com/playlist/1JdQ9Db0SaeHs3HvZsgDAI',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQUtflM0eCfdRRF_cOoEz-xLz213vzlM-Bg&s',
  },
  {
    name: 'chill',
    url: 'https://open.spotify.com/playlist/7nX8Vg5gfvlv1yR5S1lFMK',
    image:
      'https://i1.sndcdn.com/artworks-yBulbHkiiUn2HiJA-0ztJSQ-t500x500.jpg',
  },
  {
    name: 'groovy',
    url: 'https://open.spotify.com/playlist/1ah4hne89qQhKPA4W3rySI',
    image:
      'https://upload.wikimedia.org/wikipedia/en/5/52/Ros%C3%A9_and_Bruno_Mars_-_Apt..png',
  },
  {
    name: 'brown noise',
    url: 'https://open.spotify.com/playlist/6Z5YjU3FLTV90E8myUs2x4',
    image: 'https://i.scdn.co/image/ab67616d0000b273e11707e0ace248e461533c8a',
  },
  {
    name: 'no lyrics',
    url: 'https://open.spotify.com/playlist/56EWpoS3S6mhHXlkXtuyat',
    image: 'https://i.scdn.co/image/ab67616d0000b2734cf0b29eb06a92aa96acae64',
  },
]
