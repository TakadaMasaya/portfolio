'use client'

import { GoProject } from 'react-icons/go'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { MdAutoAwesome } from 'react-icons/md'
import { CAREER_TYPE } from './types/careerTypes'

export const CAREER_START_ICON = new Map()
CAREER_START_ICON.set(CAREER_TYPE.company, <HiOutlineOfficeBuilding fontSize={24} />)
CAREER_START_ICON.set(CAREER_TYPE.project, <GoProject fontSize={24} />)
CAREER_START_ICON.set(CAREER_TYPE.other, <MdAutoAwesome fontSize={24} />)
