"use client"

import Image from "next/image";
import React from "react";
import {
  FaAddressBook,
  FaArrowAltCircleDown,
  FaClock,
  FaStar,
  FaThumbsUp,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import ProgressBar from "../progressbar";

const WealthProfile = () => {
 
  return (
    <div className="md:w-[400px] w-full rounded  bg-white shadow p-2 mx-auto">
      {/* wealthprofile section starts */}
      <div className="">
        {/* parent starts */}
        <div className="flex justify-between mt-5 ">
          {/* profile card starts */}
          <div>
            <p className="md:text-xl md:font-bold text-lg font-bold">
              Readiness score
            </p>
          </div>
          <div className="border border-1 border-gray-300 p-1 rounded">
            <p className="text-gray-500 font-medium">Result:Perfect</p>
          </div>

          {/* parent ends */}
        </div>

        {/* progress div */}
        <div className="-mt-16">
        <ProgressBar/>
        </div>
        {/* parent starts */}
        <div className="flex justify-between">
          <div>
            <p className="font-bold">Low</p>
          </div>
          <div>
            <p className="font-bold">Intermediate</p>
          </div>
          <div>
            <p className="font-bold">High</p>
          </div>
          {/* parent end */}
        </div>

        
       
        {/* icon div starts */}
        <div className="bg-gray-200 p-5 rounded mt-4">
          {/* parent starts */}
          <div className="flex gap-3">
            {/* icon starts */}
            <div>
              <FaThumbsUp className="text-yellow-500 text-2xl" />
            </div>
            {/* icon ends */}
            {/* content starts */}
            <div>
              <p className="text-xs font-bold">
                Impressive score to succeed in investing
              </p>
              <p className="text-xs my-1">
                Over the past 10 years, average stock market annual return was
                14.7%. You also can benefit from investing in stock market, if
                you adjust your skills and knowledge to market realities.
              </p>
            </div>
            {/* content ends */}
          </div>
          {/* icon div ends */}
        </div>
        {/* parent ends */}
        <div className="flex justify-between items-center">
          <div>
            {/* parent 2 start */}
            <div className="flex gap-2 items-center my-3">
              {/* icon 2 starts */}
              <div className="p-2 bg-gray-200 rounded w-10 h-10 flex items-center justify-center ">
                <FaArrowAltCircleDown className="text-xl text-indigo-500" />
              </div>
              {/* icon 2 ends */}
              {/* content 2 starts */}
              <div>
                <p className="text-xs">Motivation</p>
                <p className="font-bold text-sm">HIGH</p>
              </div>
              {/* content 2 ends */}
            </div>
            {/* parent 2 ends */}

            {/* parent 2 start */}
            <div className="flex gap-2 items-center my-3">
              {/* icon 2 starts */}
              <div className="p-2 bg-gray-200 rounded w-10 h-10 flex items-center justify-center ">
                <FaStar className="text-xl text-indigo-500" />
              </div>
              {/* icon 2 ends */}
              {/* content 2 starts */}
              <div>
                <p className="text-xs">Motivation</p>
                <p className="font-bold text-sm">HIGH</p>
              </div>
              {/* content 2 ends */}
            </div>
            {/* parent 2 ends */}
            {/* parent 2 start */}
            <div className="flex gap-2 items-center my-3">
              {/* icon 2 starts */}
              <div className="p-2 bg-gray-200 rounded w-10 h-10 flex items-center justify-center ">
                <FaClock className="text-xl text-indigo-500" />
              </div>
              {/* icon 2 ends */}
              {/* content 2 starts */}
              <div>
                <p className="text-xs">Motivation</p>
                <p className="font-bold text-sm">HIGH</p>
              </div>
              {/* content 2 ends */}
            </div>
            {/* parent 2 ends */}
            {/* parent 2 start */}
            <div className="flex gap-2 items-center my-3">
              {/* icon 2 starts */}
              <div className="p-2 bg-gray-200 rounded w-10 h-10 flex items-center justify-center ">
                <FaAddressBook className="text-xl text-indigo-500" />
              </div>
              {/* icon 2 ends */}
              {/* content 2 starts */}
              <div>
                <p className="text-xs">Motivation</p>
                <p className="font-bold text-sm">HIGH</p>
              </div>
              {/* content 2 ends */}
            </div>
          </div>
          {/* parent 2 ends */}
          {/* image starts */}
          <div>
            <Image src={"/Images/18male.webp"} width={200} height={200} className="" />
          </div>
        </div>
        {/* image ends */}
        {/* button starts */}
        <div>
          <button className="bg-indigo-600 text-white p-4  w-full rounded-lg md:text-medium ">
            CONTINUE
          </button>
        </div>
        {/* button ends */}

        {/* profile card end */}
      </div>
      {/* wealth profile section ends */}
    </div>
  );
};

export default WealthProfile;
