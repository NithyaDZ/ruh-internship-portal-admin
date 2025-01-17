import React from 'react';
import { FaUser, FaFolderOpen, FaBook, FaClipboard, FaSortNumericDown, FaBullhorn, FaBuilding, FaComments, FaChalkboardTeacher, FaJournalWhills } from 'react-icons/fa';
import styles from '../styles/sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>Dashboard</div>
      <nav className={styles.nav}>
        <a href="/analyze" className={styles['nav-item']}>
          <FaUser className={styles['nav-icon']} /> Analyze
        </a>
        <a href="/select-internship" className={styles['nav-item']}>
          <FaFolderOpen className={styles['nav-icon']} /> Select Internships
        </a>
        <a href="/update-instruction" className={styles['nav-item']}>
          <FaBook className={styles['nav-icon']} /> Update Instructions
        </a>
        <a href="/add-internship" className={styles['nav-item']}>
          <FaClipboard className={styles['nav-icon']} /> Add Internships
        </a>
        <a href="/preference-update" className={styles['nav-item']}>
          <FaSortNumericDown className={styles['nav-icon']} /> Preference Update
        </a>
        <a href="/add-notices" className={styles['nav-item']}>
          <FaBullhorn className={styles['nav-icon']} /> Add Notices
        </a>
        <a href="/company-details" className={styles['nav-item']}>
          <FaBuilding className={styles['nav-icon']} /> Company Details
        </a>
        <a href="/student-feedback" className={styles['nav-item']}>
          <FaComments className={styles['nav-icon']} /> Student Feedbacks
        </a>
        <a href="/supervisor-feedback" className={styles['nav-item']}>
          <FaChalkboardTeacher className={styles['nav-icon']} /> Supervisor Feedbacks
        </a>
        <a href="/diary-updates" className={styles['nav-item']}>
          <FaJournalWhills className={styles['nav-icon']} /> Diary Updates
        </a>
      </nav>
    </div>
  );
}