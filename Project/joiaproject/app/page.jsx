import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link';

import styles from "@/app/page.module.css"
export default function Page() {
  return (
    <>
    <div className={styles.container}>
        {/* Add buttons with corresponding class name */}
        <Link href={
          {  pathname: '/pages/joia'}
              }>
        <button className={styles.button}>Go To Joia Page</button></Link>

      <h1 className={styles.text}>Joia Company's Statics & Data Analysis</h1>
      <div>
        {/* Add buttons with corresponding class name */}
        <Link href={
          {  pathname: '/pages/getCustomersPerLocation'}
              }>
        <button className={styles.button}>Number of Customers Per Location</button></Link>

        <Link href={
          {  pathname: '/pages/get3MostPurchasedItems'}
              }>        <button className={styles.button}>3 Most Purchased Items</button></Link>

          <Link href={
          {  pathname: '/pages/get3MostPurchasedItemsForSixMonths'}
              }>           
        <button className={styles.button}>3 Most Purchased Items For Last Six Months</button></Link>

        <Link href={
          {  pathname: '/pages/getItemPriceRangeWithDetails'}
              }>   
        <button className={styles.button}>Min and Max Price of an Item</button></Link>

        <Link href={
          {  pathname: '/pages/getUnpurchasedItems'}
              }>
        <button className={styles.button}>Unpurchased Items</button></Link>

        <Link href={
          {  pathname: '/pages/getCustomerDetails'}
              }>
        <button className={styles.button}>Customers Details</button></Link>
      </div>
    </div>
    </>
  
  );
}