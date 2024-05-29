// Script para abrir e fechar o Modal de Judô

const openModalJudo = document.querySelector("#btnVerMaisJudo");
const modalJudo = document.querySelector("#modalJudo");
const fadeJudo = document.querySelector("#fadeJudo");

const toggleModalJudo = () => {
    modalJudo.classList.toggle("hideJudo");
    fadeJudo.classList.toggle("hideJudo");
};

[openModalJudo, fadeJudo].forEach((el) => {
    el.addEventListener("click", () => toggleModalJudo());
});

// Script para abrir e fechar o Modal de Muay Thai

const openModalMuay = document.querySelector("#btnVerMaisMuay");
const modalMuay = document.querySelector("#modalMuay");
const fadeMuay = document.querySelector("#fadeMuay");

const toggleModalMuay = () => {
    modalMuay.classList.toggle("hideMuay");
    fadeMuay.classList.toggle("hideMuay");
};

[openModalMuay, fadeMuay].forEach((el) => {
    el.addEventListener("click", () => toggleModalMuay());
});

// Script para abrir e fechar o Modal de karatê

const openModalKarate = document.querySelector("#btnVerMaisKarate");
const modalKarate = document.querySelector("#modalKarate");
const fadeKarate = document.querySelector("#fadeKarate");

const toggleModalKarate = () => {
    modalKarate.classList.toggle("hideKarate");
    fadeKarate.classList.toggle("hideKarate");
};

[openModalKarate, fadeKarate].forEach((el) => {
    el.addEventListener("click", () => toggleModalKarate());
});

// Script para abrir e fechar o Modal de Boxe

const openModalBoxe = document.querySelector("#btnVerMaisBoxe");
const modalBoxe = document.querySelector("#modalBoxe");
const fadeBoxe = document.querySelector("#fadeBoxe");

const toggleModalBoxe = () => {
    modalBoxe.classList.toggle("hideBoxe");
    fadeBoxe.classList.toggle("hideBoxe");
};

[openModalBoxe, fadeBoxe].forEach((el) => {
    el.addEventListener("click", () => toggleModalBoxe());
});