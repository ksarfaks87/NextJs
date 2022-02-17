import React, { useEffect, useState } from "react";

// import axios from "axios";
import ReactPaginate from "react-paginate";
import styles from "../styles/pagination.module.sass";
import Post from "./Post";
import Image from "next/image";
import cover from "../img/posts/postImg.jpg";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
// import { apiResolver } from "next/dist/server/api-utils";
import api from "../services/api";

registerLocale("ru", ru);
// import myDataPicker from "./myDataPicker";

const Pagination = ({ postsCount, postsPerPage }) => {
  const [postsOnPage, setPostsOnPage] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  // const [isFiltered, setIsFiltered] = useState(false);
  const [initialPage, setInitialPage] = useState(0);

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // const firstDate = moment(startDate).format("YYYY-MM-DD");
  // const secondDate = moment(endDate).format("YYYY-MM-DD");

  useEffect(() => {
    api.posts
      .getPosts(pageNumber, postsPerPage, startDate, endDate)
      .then((res) => {
        setPostsOnPage(res.data);
        endDate
          ? setPageCount(Math.ceil(postsOnPage.length / postsPerPage))
          : setPageCount(Math.ceil(postsCount / postsPerPage));
      });
  }, [pageNumber, endDate, postsPerPage, postsCount]);

  // useEffect(() => {
  //   setPageCount(Math.ceil(postsCount / postsPerPage));
  // }, [postsCount]);

  useEffect(() => {
    setInitialPage(0);
    setPageNumber(1);
  }, [endDate]);

  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
    setInitialPage(e.selected);
  };

  return (
    <>
      <div className="wantToBuild-top__cover _ibg">
        <Image src={cover} alt="" layout="fill" />
      </div>
      <div className="posts-container _container">
        <h1 className="posts-title">Posts page {pageNumber}</h1>
        <div className={styles.main_content}>
          <div className={styles.date_container}>
            <p className={styles.date_title}>Фильтр постов по датам</p>
            <DatePicker
              locale="ru"
              selectsRange={true}
              dateFormat="dd/MM/yyyy"
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              isClearable={true}
              calendarClassName={styles.date_table}
              className={styles.date_main}
            />
          </div>
          <div>
            <Post postsOnPage={postsOnPage} />
          </div>
        </div>
        <div className={styles.paginationContainer}>
          <ReactPaginate
            forcePage={initialPage}
            containerClassName={styles.ul}
            pageClassName={styles.li}
            previousClassName={styles.previous}
            activeClassName={styles.active}
            nextClassName={styles.next}
            disabledClassName={styles.previousLi}
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}            
          />
        </div>
      </div>
    </>
  );
};

export default Pagination;
