import { BaseEntity, Entity, Column, OneToMany, PrimaryColumn } from 'typeorm'
import { Ad } from './index'

@Entity('ulice')
export default class Street extends BaseEntity {
    @PrimaryColumn({ name: 'id_teryt' })
    id: number;

    @PrimaryColumn({ name: 'miasto_id_teryt' })
    cityId: number;

    @Column({ name: 'nazwa' })
    name: string;
    
    @OneToMany(() => Ad, (ad: Ad) => ad.street)
    ads: Ad[];
}