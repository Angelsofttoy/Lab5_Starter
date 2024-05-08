// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//Tests on isPhoneNumber
test('expect (858)-361-8679 to be true ', () => {
  expect(isPhoneNumber("(858)-361-8679")).toBe(true);
});

test('expect 858-331-8679 to be true', () => {
  expect(isPhoneNumber("858-331-8679")).toBe(true);
});

test('expect (858)33-8679 to be false', () => {
  expect(isPhoneNumber("(858)33-8679")).toBe(false);
});

test('expect 8583318679 to be false', () => {
  expect(isPhoneNumber("8583318679")).toBe(false);
});

//Tests on isEmail
test('expect yiren@ucsd.edu to be true', () => {
  expect(isEmail("yiren@ucsd.edu")).toBe(true);
});

test('expect anglesofttoy@gmail.com to be true', () => {
  expect(isEmail("anglesofttoy@gmail.com")).toBe(true);
});

test('expect notanemailrandom.com to be false', () =>{
  expect(isEmail("notanemailrandom.com")).toBe(false);
});

test('expect kindof@email.html to be false', () => {
  expect(isEmail("kindof@email.html")).toBe(false);
});

//Tests on isStrongPassword
test('expect abcd to be true', ()=>{
  expect(isStrongPassword("abcd")).toBe(true);
});

test('expect Remi9012 to be true', ()=>{
  expect(isStrongPassword("Remi9012")).toBe(true);
});

test('expect 89382 to be false', ()=>{
  expect(isStrongPassword("89382")).toBe(false);
});

test('expect ami to be false', ()=>{
  expect(isStrongPassword("ami")).toBe(false);
});

//Tests on isDate
test('expect 12/1/2024 to be true', ()=>{
  expect(isDate("12/1/2024")).toBe(true);
});

test('expect 1/12/2024 to be true', ()=>{
  expect(isDate("12/1/2024")).toBe(true);
});

test('expect 2024/01/02 to be false', ()=>{
  expect(isDate("2024/01/02")).toBe(false);
});

test('expect 1/2382349/2024 to be false', ()=>{
  expect(isDate("1/2382349/2024")).toBe(false);
});

//Tests on isHexColor
test('expect #333 to be true', ()=>{
  expect(isHexColor("#333")).toBe(true);
});

test('expect #333333 to be true', ()=>{
  expect(isHexColor("#333333")).toBe(true);
});

test('expect #3335 to be false', ()=>{
  expect(isHexColor("#3335")).toBe(false);
});

test('expect #90239FF to be false', ()=>{
  expect(isHexColor("#90239FF")).toBe(false);
});