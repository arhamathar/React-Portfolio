import cpp from '../images/cpp.svg';
import git from '../images/git.svg';
import node from '../images/node.svg';
import react from '../images/react.svg';
import github from '../images/github.svg';
import python from '../images/python.svg';
import vscode from '../images/vscode.svg';
import javascript from '../images/js.svg';
import express from '../images/express.svg';
import mongodb from '../images/mongodb.svg';


const languages = [
    {
        id: 1,
        icon: javascript,
        name: 'Javascript',
        alt: 'js'
    },
    {
        id: 2,
        icon: python,
        name: 'Python',
        alt: 'python'
    },
    {
        id: 3,
        icon: cpp,
        name: 'C++'
    }
]

const technologies = [
    {
        id: 1,
        icon: mongodb,
        name: 'Mongodb',
        alt: 'mongodb'
    },
    {
        id: 2,
        icon: express,
        name: 'Express',
        alt: 'express'
    },
    {
        id: 3,
        icon: react,
        name: 'React',
        alt: 'react'
    },
    {
        id: 4,
        icon: node,
        name: 'Node Js',
        alt: 'node'
    }
]

const tools = [

    {
        id: 1,
        icon: vscode,
        name: 'VS Code',
        alt: 'vscode'
    },
    {
        id: 2,
        icon: git,
        name: 'Git',
        alt: 'git'
    },
    {
        id: 3,
        icon: github,
        name: 'Github',
        alt: 'github'
    }

]

export { languages, technologies, tools }