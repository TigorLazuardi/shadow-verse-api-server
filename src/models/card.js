import { Schema, model } from 'mongoose'

const cardSchema = new Schema({
  card_id: Number,
  foil_card_id: Number,
  card_set_id: Number,
  card_name: String,
  is_foil: Number,
  char_type: Number,
  clan: Number,
  tribe_name: String,
  skill: String,
  skill_condition: String,
  skill_target: String,
  skill_option: String,
  skill_preprocess: String,
  skill_disc: String,
  org_skill_disc: String,
  evo_skill_disc: String,
  org_evo_skill_disc: String,
  cost: Number,
  atk: Number,
  life: Number,
  evo_atk: Number,
  evo_life: Number,
  rarity: Number,
  get_red_ether: Number,
  use_red_ether: Number,
  description: String,
  evo_description: String,
  cv: String,
  copyright: String,
  base_card_id: Number,
  tokens: { type: Number, default: null },
  normal_card_id: Number,
  format_type: Number,
  restricted_count: Number,
})

export default model('Cards', cardSchema)
