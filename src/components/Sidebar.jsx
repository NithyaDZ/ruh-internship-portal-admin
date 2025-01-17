import React from 'react';
import { FaUser, FaFolderOpen, FaBook, FaClipboard, FaSortNumericDown, FaBullhorn, FaBuilding, FaComments, FaChalkboardTeacher, FaJournalWhills } from 'react-icons/fa';
import styles from '../styles/sidebar.module.css';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const NavLinkStyles=({ isActive}) =>{
    return{
      fontWeight: isActive? 'bold' :'normal',
    }
  }
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>Dashboard</div>
      <nav className={styles.nav}>
        <NavLink style={NavLinkStyles} to="/analyze" className={styles['nav-item']}>
          <FaUser className={styles['nav-icon']} /> Analyze
        </NavLink>
        <NavLink style={NavLinkStyles} to="/select-internship" className={styles['nav-item']}>
          <FaFolderOpen className={styles['nav-icon']} /> Select Internships
        </NavLink>
        <NavLink style={NavLinkStyles} to="/update-instruction" className={styles['nav-item']}>
          <FaBook className={styles['nav-icon']} /> Update Instructions
        </NavLink>
        <NavLink style={NavLinkStyles} to="/add-internship" className={styles['nav-item']}>
          <FaClipboard className={styles['nav-icon']} /> Add Internships
        </NavLink>
        <NavLink style={NavLinkStyles} to="/preference-update" className={styles['nav-item']}>
          <FaSortNumericDown className={styles['nav-icon']} /> Preference Update
        </NavLink>
        <NavLink style={NavLinkStyles} to="/add-notices" className={styles['nav-item']}>
          <FaBullhorn className={styles['nav-icon']} /> Add Notices
        </NavLink>
        <NavLink style={NavLinkStyles} to="/company-details" className={styles['nav-item']}>
          <FaBuilding className={styles['nav-icon']} /> Company Details
        </NavLink>
        <NavLink style={NavLinkStyles} to="/student-feedback" className={styles['nav-item']}>
          <FaComments className={styles['nav-icon']} /> Student Feedbacks
        </NavLink>
        <NavLink style={NavLinkStyles} to="/supervisor-feedback" className={styles['nav-item']}>
          <FaChalkboardTeacher className={styles['nav-icon']} /> Supervisor Feedbacks
        </NavLink>
        <NavLink style={NavLinkStyles} to="/diary-updates" className={styles['nav-item']}>
          <FaJournalWhills className={styles['nav-icon']} /> Diary Updates
        </NavLink>
      </nav>
    </div>
  );
}