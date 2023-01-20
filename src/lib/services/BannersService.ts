import { provider } from '$lib/config'
import type { Error } from '$lib/types'
import { getAPI } from '$lib/utils/api'
import { getBigCommerceApi, getBySid, getWooCommerceApi } from '$lib/utils/server'
import { serializeNonPOJOs } from '$lib/utils/validations'
import { error } from '@sveltejs/kit'

export const fetchBanners = async ({
	origin,
	pageId,
	storeId,
	server = false,
	sid = null
}: any) => {
	try {
		let res: any = {}
		switch (provider) {
			case 'litekart':
				if (server) {
					res = await getBySid(`banners?pageId=${pageId}&store=${storeId}&active=true`, sid)
				} else {
					res = await getAPI(`banners?pageId=${pageId}&store=${storeId}&active=true`, origin)
				}
				break
			case 'bigcommerce':
				res = await getBigCommerceApi(`banners`, {}, sid)
				break
			case 'woocommerce':
				res = await getWooCommerceApi(`banners`, {}, sid)
				break
		}
		return res.data || []
	} catch (err) {
		const e = err as Error
		throw error(e.status, e.data.message)
	}
}

export const fetchBannersGroup = async ({
	origin,
	storeId,
	pageId,
	server = false,
	sid = null
}: any) => {
	try {
		let res: any = {}
		switch (provider) {
			case 'litekart':
				if (server) {
					res = await getBySid(`banners?pageId=${pageId}&store=${storeId}&active=true`, sid)
				} else {
					res = await getAPI(`banners?pageId=${pageId}&store=${storeId}&active=true`, origin)
				}
				break
			case 'bigcommerce':
				res = await getBigCommerceApi(`banners`, {}, sid)
				break
			case 'woocommerce':
				res = await getWooCommerceApi(`banners`, {}, sid)
				break
		}
		return res.data || []
	} catch (err) {
		const e = err as Error
		throw error(e.status, e.data.message)
	}
}
