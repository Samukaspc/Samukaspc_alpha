import React from 'react';
import { PaginationButton, PaginationContainer } from './styled';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    return (
        <PaginationContainer>
            <PaginationButton
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <FaArrowLeft />
            </PaginationButton>
            {pages.map(page => (
                <PaginationButton
                    key={page}
                    onClick={() => onPageChange(page)}
                    active={page === currentPage}
                >
                    {page}
                </PaginationButton>
            ))}
            <PaginationButton
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <FaArrowRight />
            </PaginationButton>
        </PaginationContainer>
    );
}
