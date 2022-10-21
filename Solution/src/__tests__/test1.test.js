import React from 'react'
import { render, fireEvent,act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import App from "../components/App";

describe('Testing Relationship',() => {
    it('Testing Friends', () => {
        const {getByTestId} = render(<App />)
        fireEvent.change(getByTestId('input1'), { target: { value: 'ant' } })
        fireEvent.change(getByTestId('input2'), { target: { value: 'oggy' } })
        fireEvent.click(getByTestId('calculate_relationship'))
        expect(getByTestId('answer')).toHaveTextContent("Friends")
    })
})

describe('Testing Relationship',() => {
    it('Testing Love', () => {
        const {getByTestId} = render(<App />)
        fireEvent.change(getByTestId('input1'), { target: { value: 'aunt' } })
        fireEvent.change(getByTestId('input2'), { target: { value: 'oggy' } })
        fireEvent.click(getByTestId('calculate_relationship'))
        expect(getByTestId('answer')).toHaveTextContent("Love")
    })
})

describe('Testing Relationship',() => {
    it('Testing Affection', () => {
        const {getByTestId} = render(<App />)
        fireEvent.change(getByTestId('input1'), { target: { value: 'ranbir' } })
        fireEvent.change(getByTestId('input2'), { target: { value: 'deepika' } })
        fireEvent.click(getByTestId('calculate_relationship'))
        expect(getByTestId('answer')).toHaveTextContent("Affection")
    })
})

describe('Testing Relationship',() => {
    it('Testing Marriage', () => {
        const {getByTestId} = render(<App />)
        fireEvent.change(getByTestId('input1'), { target: { value: 'salman' } })
        fireEvent.change(getByTestId('input2'), { target: { value: 'aamirs' } })
        fireEvent.click(getByTestId('calculate_relationship'))
        expect(getByTestId('answer')).toHaveTextContent("Marriage")
    })
})

describe('Testing Relationship',() => {
    it('Testing Enemy', () => {
        const {getByTestId} = render(<App />)
        fireEvent.change(getByTestId('input1'), { target: { value: 'karan' } })
        fireEvent.change(getByTestId('input2'), { target: { value: 'alia' } })
        fireEvent.click(getByTestId('calculate_relationship'))
        expect(getByTestId('answer')).toHaveTextContent("Enemy")
    })
})

describe('Testing Relationship',() => {
    it('Testing Siblings', () => {
        const {getByTestId} = render(<App />)
        fireEvent.change(getByTestId('input1'), { target: { value: 'ranbir' } })
        fireEvent.change(getByTestId('input2'), { target: { value: 'alia' } })
        fireEvent.click(getByTestId('calculate_relationship'))
        expect(getByTestId('answer')).toHaveTextContent("Siblings")
    })
})

describe('Testing Relationship',() => {
    it('Testing blank input values', () => {
        const {getByTestId} = render(<App />)
        fireEvent.change(getByTestId('input2'), { target: { value: 'alia' } })
        fireEvent.click(getByTestId('calculate_relationship'))
        expect(getByTestId('answer')).toHaveTextContent("Please Enter valid input")
    })
})

describe('Testing Relationship',() => {
    it('Testing Clear Button', () => {
        const {getByTestId} = render(<App />)
        fireEvent.change(getByTestId('input1'), { target: { value: 'ranbir' } })
        fireEvent.change(getByTestId('input2'), { target: { value: 'alia' } })
        fireEvent.click(getByTestId('calculate_relationship'))
        expect(getByTestId('answer')).toHaveTextContent("Siblings")
        fireEvent.click(getByTestId('clear'))
        expect(getByTestId('input1')).toHaveValue("")
        expect(getByTestId('input2')).toHaveValue("")
        expect(getByTestId('answer')).toHaveTextContent("")
        fireEvent.change(getByTestId('input1'), { target: { value: 'karan' } })
        fireEvent.change(getByTestId('input2'), { target: { value: 'alia' } })
        fireEvent.click(getByTestId('calculate_relationship'))
        expect(getByTestId('answer')).toHaveTextContent("Enemy")
    })
})

describe('Testing Relationship',() => {
    it('Testing Random inputs', () => {
        const {getByTestId} = render(<App />)
        fireEvent.change(getByTestId('input1'), { target: { value: 'ranbir' } })
        fireEvent.change(getByTestId('input2'), { target: { value: 'alia' } })
        fireEvent.click(getByTestId('calculate_relationship'))
        expect(getByTestId('answer')).toHaveTextContent("Siblings")
        fireEvent.change(getByTestId('input1'), { target: { value: 'karan' } })
        fireEvent.change(getByTestId('input2'), { target: { value: 'alia' } })
        fireEvent.click(getByTestId('calculate_relationship'))
        expect(getByTestId('answer')).toHaveTextContent("Enemy")
    })
})
