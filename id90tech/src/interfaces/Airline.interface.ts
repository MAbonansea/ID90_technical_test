export interface AirlineInterface{
    id: number,
    name: string,
    code: string,
    sign_in_available: boolean,
    sign_up_available: boolean,
    display_name: string,
    is_commercial: boolean,
    employee_number_required: boolean,
    partner: boolean,
    lang: string,
    currency: string,
    email_domains: any
    airline_blog_uri:string
}