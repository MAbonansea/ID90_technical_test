import { LocationInterface } from './Location.interface';
import { FeatureInterface } from './Feature.interface';
export interface HotelInterface {
    
        id: number,
        name: string,
        location: LocationInterface,
        chain: any,
        subtotal: any,
        checkin: Date,
        checkout: Date,
        promotions: any,
        feacture : FeatureInterface,
        nights: number,
        position: number,
        id90: number,
        displayable_id: string,
        ratings: any,
        star_rating: number,
        review_rating: number,
        display_rate: number,
        display_rate_with_promo: string,
        total: number,
        image: string,
        description: string,
        location_description: string,
        discount_promotion: any,
        accommodation_type: any,
        retail_rate: number,
        savings_amount: number,
        distance: number,
        distance_to_airport: any,
        number_of_rooms: number,
        total_discount_amount: string,
        surcharges: any,
        taxes_and_fees: any,
        payment_date: any,
        payment_option: any,
        token_store: any,
        supplier_special_rate_type: any,
        experiment_variation: any
    
}
export interface HotelParam{
        destiny: string, 
        checkin : string, 
        checkout : string, 
        capacity:number
}