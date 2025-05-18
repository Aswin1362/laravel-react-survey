<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SurveyQuestions extends Model
{
    protected $fillable = ['id', 'type', 'question', 'data', 'survey_id'];
}
